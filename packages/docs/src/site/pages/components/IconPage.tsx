import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Check,
  ChevronDown,
  Clipboard,
  Clock,
  Github,
  Icon,
  Inline,
  Instagram,
  Linkedin,
  Monitor,
  Moon,
  Rss,
  Search,
  Sun,
  Text,
  X,
} from '@capper-ui/react';
import { ComponentPreview } from '../../components/ComponentPreview/ComponentPreview';
import { type PropRow, PropsTable } from '../../components/PropsTable/PropsTable';

const rows: PropRow[] = [
  {
    name: 'icon',
    type: 'FeatherIcon',
    description: 'Feather icon component, e.g. Sun or ArrowLeft.',
  },
  { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Icon dimensions.' },
  {
    name: 'label',
    type: 'string',
    description: 'Accessible name. Omit when decorative.',
  },
];

const starterIcons = [
  { icon: Sun, label: 'Light theme' },
  { icon: Moon, label: 'Dark theme' },
  { icon: Monitor, label: 'System theme' },
  { icon: ArrowLeft, label: 'Back' },
  { icon: ArrowRight, label: 'Forward' },
  { icon: Rss, label: 'RSS feed' },
  { icon: Search, label: 'Search' },
  { icon: Calendar, label: 'Calendar' },
  { icon: Clock, label: 'Clock' },
  { icon: ChevronDown, label: 'Expand' },
  { icon: Check, label: 'Copied' },
  { icon: Clipboard, label: 'Copy' },
  { icon: Github, label: 'GitHub' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: X, label: 'X' },
] as const;

const starterImport = "import { ArrowLeft, Icon, Search, Sun } from '@capper-ui/react';";

const starterUsage = `<Icon icon={Sun} label="Light theme" />
<Icon icon={Search} label="Search" />
<Icon icon={ArrowLeft} label="Back" />`;

export function IconPage() {
  return (
    <div className="prose">
      <Text as="h1">Icon</Text>
      <Text as="p" className="lede">
        Capper UI ships MIT-licensed Feather icons as SVG components. The Icon wrapper maps sizes to
        the design system and inherits color from currentColor. No extra icon package to install.
      </Text>

      <Text as="h2">Starter set</Text>
      <ComponentPreview code={`${starterImport}\n\n${starterUsage}`}>
        <Inline gap="md" align="center" wrap>
          {starterIcons.map(({ icon, label }) => (
            <Icon key={label} icon={icon} size="lg" label={label} />
          ))}
        </Inline>
      </ComponentPreview>

      <Text as="h2">Sizes</Text>
      <ComponentPreview
        code={`<Icon icon={Sun} size="sm" aria-hidden />\n<Icon icon={Sun} size="md" aria-hidden />\n<Icon icon={Sun} size="lg" aria-hidden />`}
      >
        <Inline gap="md" align="center">
          <Icon icon={Sun} size="sm" aria-hidden />
          <Icon icon={Sun} size="md" aria-hidden />
          <Icon icon={Sun} size="lg" aria-hidden />
        </Inline>
      </ComponentPreview>

      <Text as="h2">Props</Text>
      <PropsTable rows={rows} />
    </div>
  );
}
