import { GradientText, Stack, Text } from '@capper-ui/react';
import { ComponentPreview } from '../../components/ComponentPreview/ComponentPreview';
import { type PropRow, PropsTable } from '../../components/PropsTable/PropsTable';

const rows: PropRow[] = [
  {
    name: 'as',
    type: "'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'",
    default: "'span'",
    description: 'HTML element. Use h1, h2, or h3 for blog titles.',
  },
  {
    name: 'variant',
    type: "'ink' | 'accent' | 'warm' | 'soft'",
    default: "'ink'",
    description: 'Named token gradient. ink is the default for long titles.',
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'",
    default: "'3xl'",
    description: 'Type scale. Map h1 to 4xl or 5xl, h2 to 3xl, h3 to 2xl.',
  },
  {
    name: 'weight',
    type: "'regular' | 'medium' | 'semibold' | 'bold'",
    default: "'bold'",
    description: 'Font weight.',
  },
];

const sample = 'Shipping a design system in public';

export function GradientTextPage() {
  return (
    <div className="prose">
      <Text as="h1">Gradient text</Text>
      <Text as="p" className="lede">
        Left to right text gradients from semantic tokens. For blog headings, start with ink. It
        follows light and dark theme text colors and stays readable on cream and near black.
      </Text>

      <Text as="h2">Variants</Text>
      <ComponentPreview
        code={`<GradientText as="h1" variant="ink" size="4xl">Shipping a design system in public</GradientText>
<GradientText as="h1" variant="accent" size="4xl">Shipping a design system in public</GradientText>
<GradientText as="h1" variant="warm" size="4xl">Shipping a design system in public</GradientText>
<GradientText as="h1" variant="soft" size="4xl">Shipping a design system in public</GradientText>`}
      >
        <Stack gap="lg">
          <div>
            <Text as="p" size="xs" weight="semibold" color="subtle">
              ink (recommended for blog)
            </Text>
            <GradientText as="h1" variant="ink" size="4xl" weight="bold">
              {sample}
            </GradientText>
          </div>
          <div>
            <Text as="p" size="xs" weight="semibold" color="subtle">
              accent
            </Text>
            <GradientText as="h1" variant="accent" size="4xl" weight="bold">
              {sample}
            </GradientText>
          </div>
          <div>
            <Text as="p" size="xs" weight="semibold" color="subtle">
              warm
            </Text>
            <GradientText as="h1" variant="warm" size="4xl" weight="bold">
              {sample}
            </GradientText>
          </div>
          <div>
            <Text as="p" size="xs" weight="semibold" color="subtle">
              soft
            </Text>
            <GradientText as="h1" variant="soft" size="4xl" weight="bold">
              {sample}
            </GradientText>
          </div>
        </Stack>
      </ComponentPreview>

      <Text as="h2">Heading sizes</Text>
      <ComponentPreview
        code={`<GradientText as="h1" variant="ink" size="4xl">Post title</GradientText>
<GradientText as="h2" variant="ink" size="3xl">Section heading</GradientText>
<GradientText as="h3" variant="ink" size="2xl">Subsection</GradientText>`}
      >
        <Stack gap="md">
          <GradientText as="h1" variant="ink" size="4xl" weight="bold">
            Post title
          </GradientText>
          <GradientText as="h2" variant="ink" size="3xl" weight="bold">
            Section heading
          </GradientText>
          <GradientText as="h3" variant="ink" size="2xl" weight="semibold">
            Subsection
          </GradientText>
        </Stack>
      </ComponentPreview>

      <Text as="h2">Blog usage</Text>
      <Text as="p">
        Put GradientText on the post title (h1) and keep body copy on Text. If a long title feels
        washed out, switch to accent. Avoid warm on h3 stacks; it reads as decoration, not
        structure.
      </Text>

      <Text as="h2">Props</Text>
      <PropsTable rows={rows} />
    </div>
  );
}
