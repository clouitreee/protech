
import yaml
import re

def parse_module_intents(intents_content):
    intents_data = yaml.safe_load(intents_content)
    module_intents = {}
    for intent in intents_data.get("intents", []):
        page = intent["page"]
        section = intent["section"]
        if page not in module_intents:
            module_intents[page] = {}
        module_intents[page][section] = {
            "content_types": intent.get("content_types", []),
            "ctas": intent.get("ctas", {}),
        }
    return module_intents

def format_content_types(content_types):
    return ", ".join(content_types)

def format_ctas(ctas):
    formatted_ctas = []
    for cta_key, cta_data in ctas.items():
        label = cta_data.get("label")
        href = cta_data.get("href")
        if label and href:
            formatted_ctas.append(f'"{label}" ({href})')
        elif label:
            formatted_ctas.append(f'"{label}"')
    return ", ".join(formatted_ctas)

def generate_components_by_page_content(sitemap_content, module_intents):
    sitemap = yaml.safe_load(sitemap_content)
    output_content = "# Komponenten-Inventar pro Unterseite\n\n"

    def process_route(route_data):
        page_path = route_data["path"]
        page_title = route_data["title"]
        modules = route_data.get("modules", [])

        output_content_local = f"## {page_path} ({page_title})\n"
        output_content_local += "**Module & UI-Komponenten**\n"

        page_modules_intents = module_intents.get(page_path, {})

        for module_name in modules:
            module_intent = page_modules_intents.get(module_name, {})
            content_types = module_intent.get("content_types", [])
            ctas = module_intent.get("ctas", {})

            output_content_local += f"- {module_name}\n"
            if content_types:
                output_content_local += f"  - Content-Typen: {format_content_types(content_types)}\n"
            if ctas:
                output_content_local += f"  - CTAs: {format_ctas(ctas)}\n"

        # Handle legal pages specifically as they might not have modules defined in sitemap.yaml
        if page_path.startswith("/recht") and not modules:
            legal_modules_map = {
                "/recht/impressum": "LegalText",
                "/recht/datenschutz": "LegalText",
                "/recht/agb": "LegalText",
                "/recht/widerruf": "LegalText",
            }
            module_name = legal_modules_map.get(page_path)
            if module_name:
                module_intent = module_intents.get(page_path, {}).get(module_name, {})
                content_types = module_intent.get("content_types", [])
                ctas = module_intent.get("ctas", {})

                output_content_local += f"- {module_name}\n"
                if content_types:
                    output_content_local += f"  - Content-Typen: {format_content_types(content_types)}\n"
                if ctas:
                    output_content_local += f"  - CTAs: {format_ctas(ctas)}\n"

        output_content_local += "\n"
        return output_content_local

    full_output = ""
    for route in sitemap["routes"]:
        full_output += process_route(route)
        if "subpages" in route:
            for subpage in route["subpages"]:
                full_output += process_route(subpage)

    return output_content + full_output

# Read sitemap.yaml content
with open("/home/ubuntu/tech-hilfe-pro-nrw/content/architecture/sitemap.yaml", "r", encoding="utf-8") as f:
    sitemap_content = f.read()

# Read module-intents.yaml content
with open("/home/ubuntu/tech-hilfe-pro-nrw/content/architecture/module-intents.yaml", "r", encoding="utf-8") as f:
    module_intents_content = f.read()

# Parse module intents
module_intents_data = parse_module_intents(module_intents_content)

# Generate updated components-by-page.md content
updated_components_by_page = generate_components_by_page_content(sitemap_content, module_intents_data)

# Write to file
with open("/home/ubuntu/tech-hilfe-pro-nrw/content/wireframes/components-by-page.md", "w", encoding="utf-8") as f:
    f.write(updated_components_by_page)

print("Updated /home/ubuntu/tech-hilfe-pro-nrw/content/wireframes/components-by-page.md")

