/**
 * Copyright 2018 The WPT Dashboard Project. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

import '../node_modules/@polymer/polymer/lib/elements/dom-if.js';
import { html } from '../node_modules/@polymer/polymer/polymer-element.js';
import { PolymerElement } from '../node_modules/@polymer/polymer/polymer-element.js';
import './gh-login.js';
import './info-banner.js';
import { WPTFlags } from './wpt-flags.js';

class WPTHeader extends WPTFlags(PolymerElement) {
  static get template() {
    return html`
    <style>
      * {
        margin: 0;
        padding: 0;
      }
      img {
        display: inline-block;
        height: 32px;
        margin-right: 16px;
        width: 32px;
      }
      a {
        text-decoration: none;
        color: #0d5de6;
      }
      header {
        padding: 0.5em 0;
      }
      header h1 {
        font-size: 1.5em;
        line-height: 1.5em;
        margin-bottom: 0.2em;
        display: flex;
        align-items: center;
      }
      header > div {
        align-items: center;
        display: flex;
        justify-content: space-between;
      }
      header nav a {
        margin-right: 1em;
      }
      #caveat {
        margin: 0.5em 0;
      }
    </style>
    <header>
      <div>
        <h1>
          <img src="/static/logo.svg">
          <a href="/">web-platform-tests dashboard</a>
        </h1>
        <template is="dom-if" if="[[githubLogin]]">
          <gh-login user="[[user]]"></gh-login>
        </template>
      </div>

      <nav>
        <!-- TODO: handle onclick with wpt-results.navigate if available -->
        <a href="/">Latest Run</a>
        <a href="/runs">Recent Runs</a>
        <a href="/insights">Insights</a>
        <template is="dom-if" if="[[processorTab]]">
          <a href="/status">Processor</a>
        </template>
        <a href="/about">About</a>
        <a href="https://github.com/web-platform-tests/wpt.fyi">GitHub Source</a>
      </nav>
      <info-banner id="caveat" type="error">
        wpt.fyi is a work in progress. The reported results do not necessarily reflect the true capabilities of each web browser, so they should not be used evaluate or compare feature support.
      </info-banner>
    </header>
`;
  }

  static get is() {
    return 'wpt-header';
  }

  static get properties() {
    return {
      user: String,
    };
  }
}
window.customElements.define(WPTHeader.is, WPTHeader);
