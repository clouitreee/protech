
import yaml

def generate_component_sourcing(intents_content):
    intents_data = yaml.safe_load(intents_content)
    sourcing_content = "# Component Sourcing Recommendations\n\n"
    sourcing_content += "This document provides recommendations for sourcing or implementing each modular UI component.\n\n"

    unique_modules = {}
    for intent in intents_data.get("intents", []):
        module_name = intent.get("section")
        if module_name:
            # Flatten content_types to a list of strings for consistent processing
            flattened_content_types = []
            for ct_item in intent.get("content_types", []):
                if isinstance(ct_item, dict):
                    for key, value in ct_item.items():
                        flattened_content_types.append(f"{key}:{value}")
                else:
                    flattened_content_types.append(str(ct_item))
            
            if module_name not in unique_modules:
                unique_modules[module_name] = flattened_content_types
            else:
                # Merge content types if module appears multiple times (e.g., FAQ)
                for ct in flattened_content_types:
                    if ct not in unique_modules[module_name]:
                        unique_modules[module_name].append(ct)

    for module_name, content_types in unique_modules.items():
        sourcing_content += f"## {module_name}\n\n"
        sourcing_content += "**Content Types:** `{" + ", ".join(content_types) + "}`\n\n"
        sourcing_content += "**Recommendations:**\n\n"
        sourcing_content += "- **UI Library:** Consider using a component library like **Chakra UI** or **Headless UI** with **Tailwind CSS** for a good balance of pre-built components and customization options.\n"
        sourcing_content += "- **Implementation Notes:**\n"

        if any("form" in ct for ct in content_types):
            sourcing_content += "  - For forms, use a library like **React Hook Form** for performance and easy validation.\n"
        if any("map-placeholder" in ct for ct in content_types):
            sourcing_content += "  - For maps, consider using **React Leaflet** or **Google Maps React**.\n"
        if any("carousel" in ct for ct in content_types):
            sourcing_content += "  - For carousels, **Swiper.js** or **react-slick** are popular choices.\n"
        if any("accordion" in ct for ct in content_types):
            sourcing_content += "  - Accordions can be built with Headless UI or Chakra UI's accordion component.\n"
        if any("logo-strip" in ct for ct in content_types) or "ProofBar" in module_name:
            sourcing_content += "  - Logo strips can be a simple flexbox container with grayscale images.\n"

        sourcing_content += "  - General components like `Heading`, `Paragraph`, `Button`, `Card`, and `Grid` can be custom-built with Tailwind CSS for maximum design control.\n\n"

    with open("/home/ubuntu/tech-hilfe-pro-nrw/content/wireframes/component-sourcing.md", "w", encoding="utf-8") as f:
        f.write(sourcing_content)

    print("Generated /home/ubuntu/tech-hilfe-pro-nrw/content/wireframes/component-sourcing.md")

# Read module-intents.yaml content
with open("/home/ubuntu/tech-hilfe-pro-nrw/content/architecture/module-intents.yaml", "r", encoding="utf-8") as f:
    module_intents_content = f.read()

# Generate component-sourcing.md
generate_component_sourcing(module_intents_content)

