const { execSync } = require('child_process');
const path = require('path');

const forbiddenTerms = [
  'MwSt',
  'USt',
  'IVA',
  'VAT',
  'inkl.',
  'zzgl.',
];

const allowlistPaths = [
  'app/(legal)/recht/impressum/page.tsx',
  'app/(legal)/recht/datenschutz/page.tsx',
  'app/(legal)/recht/agb/page.tsx',
  'app/(legal)/recht/widerruf/page.tsx',
  'app/(site)/blog',
  'docs',
  'scripts/guard-vat.js',
  'tests',
];

const checkFileForTerms = (filePath) => {
  const content = execSync(`cat ${filePath}`, { encoding: 'utf-8' });
  for (const term of forbiddenTerms) {
    if (content.includes(term)) {
      return `Forbidden term '${term}' found in ${filePath}`;
    }
  }
  return null;
};

const runVatGuard = () => {
  console.log('Running VAT compliance guard...');
  let violations = [];

  // Find all relevant files (tsx, ts, js, jsx, md)
  const files = execSync(
    `find app components content docs scripts tests -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" -o -name "*.md" \)`,
    { encoding: 'utf-8' }
  ).split('\n').filter(Boolean);

  for (const filePath of files) {
    const relativePath = path.relative(process.cwd(), filePath);
    const isAllowed = allowlistPaths.some(allowedPath => relativePath.startsWith(allowedPath));

    if (!isAllowed) {
      const violation = checkFileForTerms(filePath);
      if (violation) {
        violations.push(violation);
      }
    }
  }

  if (violations.length > 0) {
    console.error('\nVAT Compliance Violations Found:');
    violations.forEach(v => console.error(v));
    process.exit(1);
  } else {
    console.log('VAT compliance guard passed. No forbidden terms found.');
  }
};

runVatGuard();

