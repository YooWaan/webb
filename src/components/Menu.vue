<template>
<div class="uk-inline uk-position-absolute uk-position-top-left">
  <div class="uk-overlay uk-padding-small">
    <button class="uk-button uk-button-default" type="button">
      <span uk-icon="menu"></span>
      This is sitemap
    </button>
    <div uk-dropdown>
        <ul class="uk-nav uk-dropdown-nav">
            <li class="uk-active"><a href="#">
              <span uk-icon="thumbnails"></span>
              Sitemap
            </a></li>
            <li><a href="#">Site xxxx</a></li>

            <li class="uk-nav-divider"></li>

            <li class="uk-nav-header">
              <span uk-icon="code"></span>
              Others
            </li>
            <li><a href="#">Import/Export</a></li>
        </ul>
    </div>
  </div>
</div>
</template>
