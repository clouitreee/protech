
import yaml

def apply_cta_constraints(intents_content):
    intents_data = yaml.safe_load(intents_content)
    updated_intents = []

    for intent in intents_data.get("intents", []):
        ctas = intent.get("ctas", {})
        if len(ctas) > 2:
            # Keep only primary and secondary CTAs
            new_ctas = {}
            if "primary" in ctas:
                new_ctas["primary"] = ctas["primary"]
            if "secondary" in ctas:
                new_ctas["secondary"] = ctas["secondary"]
            intent["ctas"] = new_ctas
        updated_intents.append(intent)

    intents_data["intents"] = updated_intents
    return yaml.dump(intents_data, allow_unicode=True, sort_keys=False)

# Read module-intents.yaml content
with open("/home/ubuntu/tech-hilfe-pro-nrw/content/architecture/module-intents.yaml", "r", encoding="utf-8") as f:
    module_intents_content = f.read()

# Apply CTA constraints
updated_content = apply_cta_constraints(module_intents_content)

# Write the updated content back to the file
with open("/home/ubuntu/tech-hilfe-pro-nrw/content/architecture/module-intents.yaml", "w", encoding="utf-8") as f:
    f.write(updated_content)

print("Applied CTA constraints to /home/ubuntu/tech-hilfe-pro-nrw/content/architecture/module-intents.yaml")

