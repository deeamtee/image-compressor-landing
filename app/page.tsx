import { button as buttonStyles } from '@nextui-org/theme';
import { Button } from '@nextui-org/button';

import { title, subtitle } from '@/components/primitives';
import { ChromeIcon } from '@/components/icons';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Image&nbsp;</span>
        <span className={title({ color: 'blue' })}>Compressor&nbsp;</span>
        <div className={subtitle({ class: 'mt-4' })}>Сжатие фотографий без потери качества</div>
      </div>

      <Button className={buttonStyles({ color: 'primary' })} startContent={<ChromeIcon />}>
        Установить дополнение
      </Button>
    </section>
  );
}
