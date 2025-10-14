import os
import re
import yaml

def parse_placeholder_md(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    data = {
        'page_key': os.path.basename(filepath).replace('.md', ''),
        'h1': '',
        'subline': '',
        'copy_blocks': [],
        'ctas': [],
        'faq': [],
        'legal_pricing_note': ''
    }

    # Extract H1
    h1_match = re.search(r'^H1: (.+)$', content, re.MULTILINE)
    if h1_match: data['h1'] = h1_match.group(1).strip()

    # Extract Subline
    subline_match = re.search(r'^Subline: (.+)$', content, re.MULTILINE)
    if subline_match: data['subline'] = subline_match.group(1).strip()

    # Extract Copy Blocks
    copy_blocks_section = re.search(r'## Copy Blocks\n(.+?)(?=\n##|$)', content, re.DOTALL)
    if copy_blocks_section:
        copy_content = copy_blocks_section.group(1)
        # Match lines that are not headings or list items
        copy_lines = [line.strip() for line in copy_content.split('\n') if line.strip() and not line.strip().startswith(('- ', 'H1:', 'Subline:', '##'))]
        data['copy_blocks'] = copy_lines

    # Extract CTAs
    ctas_section = re.search(r'## CTAs\n(.+?)(?=\n##|$)', content, re.DOTALL)
    if ctas_section:
        for line in ctas_section.group(1).split('\n'):
            cta_match = re.match(r'^- (.+?): \[(.+?)\]\((.+?)\)$', line.strip())
            if cta_match:
                data['ctas'].append({
                    'type': cta_match.group(1).strip(),
                    'label': cta_match.group(2).strip(),
                    'href': cta_match.group(3).strip()
                })

    # Extract FAQ
    faq_section = re.search(r'## FAQ \(\d+ Einträge\)\n(.+?)(?=\n##|$)', content, re.DOTALL)
    if faq_section:
        current_faq = {}
        for line in faq_section.group(1).split('\n'):
            question_match = re.match(r'^- Frage: (.+?) \| Antwort: (.+)$', line.strip())
            if question_match:
                data['faq'].append({
                    'question': question_match.group(1).strip(),
                    'answer': question_match.group(2).strip()
                })

    # Extract Legal Pricing Note
    legal_note_match = re.search(r'## Legal Pricing Note\n(.+?)(?=\n##|$)', content, re.DOTALL)
    if legal_note_match: data['legal_pricing_note'] = legal_note_match.group(1).strip()

    return data

def generate_placeholders_yaml(base_path, output_path):
    placeholders_dir = os.path.join(base_path, 'content', 'placeholders', 'de')
    all_placeholders_data = []

    for filename in os.listdir(placeholders_dir):
        if filename.endswith('.md'):
            filepath = os.path.join(placeholders_dir, filename)
            all_placeholders_data.append(parse_placeholder_md(filepath))

    with open(output_path, 'w', encoding='utf-8') as f:
        yaml.dump(all_placeholders_data, f, allow_unicode=True, sort_keys=False)

if __name__ == '__main__':
    base_dir = '/home/ubuntu/tech-hilfe-pro-nrw'
    output_file = os.path.join(base_dir, 'docs', 'audit', 'placeholders.yaml')
    
    # Ensure the output directory exists
    os.makedirs(os.path.dirname(output_file), exist_ok=True)

    generate_placeholders_yaml(base_dir, output_file)

