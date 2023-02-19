import React from 'react';
import { Link } from 'gatsby';
import * as styles from '../styles/footer.module.css';

export default function Footer() {
  return (
    <footer>
      <p>
        Got questions?
        <span>
          Take a look at our&nbsp;
          <Link to="/faqs">FAQs</Link>, talk to us on Twitter @icloudready or
          send an email to
        </span>
        &nbsp; team@icloud-ready.com
      </p>
    </footer>
  );
}
