import { Slot, component$ } from '@builder.io/qwik';
import { Link, useLocation, type LinkProps } from '@builder.io/qwik-city';
import {
  removeLeadingSlashes,
  removeTrailingSlashes,
} from '@fullstacksjs/toolbox';
import { css } from '~/panda/css';

type NavLinkProps = LinkProps & { activeClass?: string };

export const NavLink = component$(({ activeClass, ...props }: NavLinkProps) => {
  const location = useLocation();
  const toPathname = removeTrailingSlashes(
    removeLeadingSlashes(props.href ?? ''),
  );
  const locationPathname = removeLeadingSlashes(
    removeTrailingSlashes(location.url.pathname),
  );

  const isActive = locationPathname === toPathname;
  const activeClassProp =
    activeClass ?? css({ borderBottom: '1px solid #fff' });

  return (
    <Link
      {...props}
      class={`${props.class || ''} ${isActive ? activeClassProp : ''} ${css({
        lineHeight: 2,
        color: isActive ? '#fff' : '#999',
      })}`}
    >
      <Slot />
    </Link>
  );
});
