import { externalProps, resolveHref } from '../utils.js';

export function SmartLink({ href, children, className = '', ...props }) {
  return (
    <a href={resolveHref(href)} className={className} {...externalProps(href)} {...props}>
      {children}
    </a>
  );
}
