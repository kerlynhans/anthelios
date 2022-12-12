/**
 * Project Name: Anthelios - v1.0.0
 * Author: Koddy.co
 */

document.addEventListener("DOMContentLoaded", () => {
  ("use strict");

  //Check if this resize function exist to create resize observer
  if (window.parent.resizeIframe) {
    const resizer = new ResizeObserver(() => {
      window.parent.resizeIframe(document.documentElement.scrollHeight);
    });
    resizer.observe(document.body);
  }
});
