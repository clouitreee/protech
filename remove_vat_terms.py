
import re
import os

def remove_vat_terms(log_file_path, report_file_path):
    vat_terms_to_remove = [
        "inkl. MwSt.", "zzgl. MwSt.", "inkl. USt.", "zzgl. USt.",
        "inkl. Umsatzsteuer", "zzgl. Umsatzsteuer", "inkl. Mehrwertsteuer", "zzgl. Mehrwertsteuer",
        "inkl. VAT", "zzgl. VAT", "inkl. IVA", "zzgl. IVA",
        "MwSt", "Mehrwertsteuer", "USt", "Umsatzsteuer", "VAT", "IVA"
    ]

    changes_made = []
    processed_files = set()

    with open(log_file_path, "r", encoding="utf-8") as f:
        log_lines = f.readlines()

    # Group changes by file to avoid multiple file writes
    file_changes = {}

    for line in log_lines:
        match = re.match(r"(.*?):(\d+):(.*)", line)
        if match:
            file_path = match.group(1)
            line_num = int(match.group(2))
            matched_text_in_log = match.group(3).strip()

            if file_path not in file_changes:
                file_changes[file_path] = []
            file_changes[file_path].append((line_num, matched_text_in_log))

    for file_path, changes_for_file in file_changes.items():
        try:
            with open(file_path, "r", encoding="utf-8") as target_file:
                lines = target_file.readlines()

            modified_lines = list(lines) # Create a mutable copy
            file_modified = False

            for line_num, matched_text_in_log in changes_for_file:
                if line_num > 0 and line_num <= len(lines):
                    original_line_content = lines[line_num - 1]
                    new_line_content = original_line_content
                    term_found = False

                    for term in vat_terms_to_remove:
                        if term in new_line_content:
                            new_line_content = new_line_content.replace(term, "")
                            term_found = True

                    if term_found:
                        modified_lines[line_num - 1] = new_line_content
                        file_modified = True
                        changes_made.append(
                            f"- File: `{file_path}`, Line: `{line_num}`\n"
                            f"  Original: `{original_line_content.strip()}`\n"
                            f"  Modified: `{new_line_content.strip()}`\n"
                        )

            if file_modified:
                with open(file_path, "w", encoding="utf-8") as target_file:
                    target_file.writelines(modified_lines)
                processed_files.add(file_path)

        except Exception as e:
            print(f"Error processing file {file_path}: {e}")

    # Append changes to the report file
    with open(report_file_path, "a", encoding="utf-8") as report_file:
        report_file.write("\n## Explicit VAT Term Removals\n")
        if changes_made:
            for change in changes_made:
                report_file.write(change)
        else:
            report_file.write("No explicit VAT terms found for removal.\n")

    print(f"VAT terms removal process completed. Report updated at {report_file_path}")

# Define paths
log_file = "/home/ubuntu/tech-hilfe-pro-nrw/vat_terms.log"
report_file = "/home/ubuntu/tech-hilfe-pro-nrw/docs/compliance/vat-removal-report.md"

# Ensure the docs/compliance directory exists
os.makedirs(os.path.dirname(report_file), exist_ok=True)

# Run the removal process
remove_vat_terms(log_file, report_file)

