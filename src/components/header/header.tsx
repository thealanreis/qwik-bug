import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <>
      <Link href="/test1">Test 1</Link>
      <Link href="/test2">Test 2</Link>
    </>
  );
});
