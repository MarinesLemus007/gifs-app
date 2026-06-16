import { ChangeDetectionStrategy, Component } from '@angular/core';

interface ListItems{
  src: string;
  alt?: string;
}

@Component({
  selector: 'app-gifs-list-item',
  imports: [],
  templateUrl: './gifs-list-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifsListItem {
    listItem: ListItems[] = [
    {
      src:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg'
    },
    {
      src:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg'
    },
        {
      src:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg'
    },
    {
      src:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg'
    },
    {
      src:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg'
    },
    {
      src:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg'
    },
    {
      src:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg'
    },
    {
      src:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg'
    },
    {
      src:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg'
    },
    {
      src:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg'
    },
    {
      src:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg'
    },
  ]
}
