
import yaml

# Define the path to the module intents file
file_path = '/home/ubuntu/tech-hilfe-pro-nrw/content/architecture/module-intents.yaml'

# Load the existing YAML data
with open(file_path, 'r') as f:
    data = yaml.safe_load(f)

# New module definitions
new_modules = [
    {
        'section': 'ProofBar',
        'page': '/',
        'core_function': 'Trust',
        'content_types': ['logo-strip', 'image-placeholder'],
        'ctas': {},
        'notes': 'Logo-Leiste zur Demonstration von Vertrauenssignalen (Zertifikate, Partner).'
    },
    {
        'section': 'ProblemSolution',
        'page': '/',
        'core_function': 'Information',
        'content_types': ['grid:3', 'card', 'heading:h3', 'paragraph'],
        'ctas': {},
        'notes': 'Gegenüberstellung von 3 typischen Kundenproblemen und den entsprechenden Lösungen.'
    },
    {
        'section': 'OnboardingSteps',
        'page': '/leistungen/managed-services',
        'core_function': 'Information',
        'content_types': ['grid:3-5', 'card', 'heading:h3', 'paragraph'],
        'ctas': {},
        'notes': 'Darstellung des Onboarding-Prozesses in 3-5 Schritten.'
    },
    {
        'section': 'PlaybooksGrid',
        'page': '/leistungen/managed-services',
        'core_function': 'Information',
        'content_types': ['grid:2-4', 'card', 'heading:h3', 'paragraph'],
        'ctas': {},
        'notes': 'Vorstellung von Standard-Playbooks (Monitoring, Patch-Management, Backup, Inventarisierung).'
    },
    {
        'section': 'OfficeHours',
        'page': '/kontakt',
        'core_function': 'Information',
        'content_types': ['text', 'list'],
        'ctas': {},
        'notes': 'Angabe der Geschäfts- und Servicezeiten.'
    },
    {
        'section': 'WhatsAppQuickCTA',
        'page': '/kontakt',
        'core_function': 'Conversion',
        'content_types': ['button', 'icon'],
        'ctas': {
            'primary': {
                'label': 'Direkt via WhatsApp schreiben',
                'href': 'https://wa.me/4915565029989',
                'type': 'wa'
            }
        },
        'notes': 'Prominenter Button für direkten WhatsApp-Kontakt.'
    }
]

# Add new modules to the data
if 'intents' in data:
    data['intents'].extend(new_modules)
else:
    data.extend(new_modules)

# Consolidate module names and apply CTA constraints
if 'intents' in data:
    for intent in data['intents']:
        if intent.get('section') == 'SLA/Anfahrt':
            intent['section'] = 'SLAHighlights'
        # Ensure CTA constraints (primary/secondary)
        if 'ctas' in intent and intent['ctas']:
            ctas = intent['ctas']
            if 'primary' not in ctas:
                # If no primary, find the first one and make it primary
                first_key = next(iter(ctas))
                ctas['primary'] = ctas.pop(first_key)
            if len(ctas) > 2:
                # Keep only primary and the next one as secondary
                primary_cta = ctas.get('primary')
                secondary_key = next((k for k in ctas if k != 'primary'), None)
                if secondary_key:
                    secondary_cta = ctas.get(secondary_key)
                    intent['ctas'] = {'primary': primary_cta, 'secondary': secondary_cta}
                else:
                    intent['ctas'] = {'primary': primary_cta}
else:
    for intent in data:
        if intent.get('section') == 'SLA/Anfahrt':
            intent['section'] = 'SLAHighlights'
        # Ensure CTA constraints (primary/secondary)
        if 'ctas' in intent and intent['ctas']:
            ctas = intent['ctas']
            if 'primary' not in ctas:
                # If no primary, find the first one and make it primary
                first_key = next(iter(ctas))
                ctas['primary'] = ctas.pop(first_key)
            if len(ctas) > 2:
                # Keep only primary and the next one as secondary
                primary_cta = ctas.get('primary')
                secondary_key = next((k for k in ctas if k != 'primary'), None)
                if secondary_key:
                    secondary_cta = ctas.get(secondary_key)
                    intent['ctas'] = {'primary': primary_cta, 'secondary': secondary_cta}
                else:
                    intent['ctas'] = {'primary': primary_cta}

# Write the updated data back to the YAML file
with open(file_path, 'w') as f:
    yaml.dump(data, f, default_flow_style=False, sort_keys=False)

print(f"Successfully updated {file_path}")

