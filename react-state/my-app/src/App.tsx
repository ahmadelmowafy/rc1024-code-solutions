import { Header } from './Header';
import { Image } from './Image';
import { Caption } from './Caption';
import { Description } from './Description';
import { Button } from './Button';
import './App.css';

const srcs = ['/starry-sky.jpeg', '/swamp.jpg', '/mountains.jpg'];
const captions = [
  'A Beautiful Image of Space',
  'A Beautiful Image of a Swamp',
  'A Beautiful Image of Mountains',
];
const descriptions = [
  `A mesmerizing space image unveils the grandeur of the cosmos, with vibrant nebulae swirling in shades of magenta, sapphire, and gold. Thousands of tiny stars dot the background like scattered diamonds, some blazing brighter than others, suggesting distant solar systems and galaxies. In the center, a radiant supernova bursts with intensity, casting a halo of iridescent light across the surrounding darkness. Wisps of cosmic dust weave intricate patterns, giving the scene an ethereal and dynamic quality. This breathtaking tableau inspires awe, evoking both the vastness of the universe and the intricate beauty of its infinite details.`,
  `A serene swamp glimmers under the soft light of dawn, its still waters mirroring the pale pink and orange hues of the sky. Tangled cypress trees rise gracefully from the water, their knotted roots forming intricate networks below the surface. Draped with veils of silvery Spanish moss, the trees lend an air of mystery and timelessness to the scene. Water lilies float peacefully, their delicate blossoms adding bursts of white and pink amid the green. The quiet chirping of unseen birds and the faint ripple of fish beneath the surface create a harmonious symphony that enhances the swamp’s tranquil allure.`,
  `A majestic mountain range stands tall under a cobalt blue sky, its rugged peaks crowned with glistening snow that sparkles like crystals in the sunlight. Forested slopes cascade down to verdant valleys, where rivers carve silvery trails through the landscape. Wisps of clouds cling to the higher ridges, creating a dreamy contrast between the earth and the heavens. Wildflowers bloom along the lower slopes, splashing the terrain with vibrant colors of purple, yellow, and red. The sheer grandeur of the mountains evokes a sense of freedom and reverence, reminding onlookers of nature's raw, unyielding beauty.`,
];

export default function App() {
  return (
    <>
      <Header text="React Image Bank" />
      <Image srcs={srcs} />
      <Caption captions={captions} />
      <Description descriptions={descriptions} />
      <Button label="Click for Next Image" />
    </>
  );
}
