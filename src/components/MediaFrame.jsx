import { getMedia } from '../data/media.js';

export function MediaFrame({
  imageKey,
  alt,
  className = '',
  priority = false,
  sizes = '(max-width: 900px) 100vw, 50vw'
}) {
  const media = getMedia(imageKey);

  return (
    <div className={`media-frame ${className}`.trim()}>
      <img
        src={media.src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchpriority={priority ? 'high' : 'auto'}
        sizes={sizes}
      />
    </div>
  );
}
