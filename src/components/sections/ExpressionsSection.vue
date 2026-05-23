<template>
  <section ref="expressionPage" id="cómo-nos-expresamos" class="expression-page">
    <section class="home-hero section-white">
      <div class="hero-lockup">
        <video class="hero-particles" autoplay muted loop playsinline preload="metadata">
          <source src="/videos/video-hero.mp4" type="video/mp4" />
        </video>
      </div>
    </section>

    <section ref="historySection" class="history section-white">
      <h2 ref="historyTitle">Nuestra historia</h2>

      <div class="history-card">

        <img ref="historyImage" class="history-image" src="/images/fundadores.png" alt="Fundadores de Bandcamp" />

        <div ref="historyCopy" class="history-copy">
          <p class="history-kicker" data-history-part>Origen</p>
          <p class="year" data-history-part>2008</p>
          <h3 data-history-part>Fundación de Bandcamp</h3>
          <div class="timeline" data-history-part>
            <span></span>
            <i class="timeline-marker" aria-hidden="true"></i>
          </div>
          <div class="history-text" aria-label="Resumen histórico">
            <p>
              <span data-history-line>Bandcamp fue fundada por Ethan Diamond, Shawn Grunberger,</span>
              <span data-history-line>Joe Holt y Neal Tucker en California.</span>
            </p>
            <p>
              <span data-history-line>La plataforma nace para dar a los artistas control directo</span>
              <span data-history-line>sobre la distribución y venta de su música.</span>
            </p>
          </div>
        </div>

      </div>
    </section>

    <section class="video-section goals">
      <video class="media-bg" autoplay muted loop playsinline preload="metadata">
        <source src="/videos/concierto.mp4" type="video/mp4" />
      </video>
      <div class="media-overlay"></div>
      <div class="goals-inner" data-expression-group>
        <h2 data-expression-text>Buscamos</h2>
        <ul>
          <li data-expression-text>Reforzar la relación directa entre artistas y fans</li>
          <li data-expression-text>Representar la diversidad de la música independiente</li>
          <li data-expression-text>Diferenciarnos del modelo de streaming masivo</li>
          <li data-expression-text>Construir una identidad basada en comunidad</li>
        </ul>
      </div>
    </section>

    <section class="video-section community">
      <video class="media-bg" autoplay muted loop playsinline preload="metadata">
        <source src="/videos/concierto-publico.mp4" type="video/mp4" />
      </video>
      <div class="media-overlay media-overlay--dark"></div>
      <div class="community-inner" data-expression-group>
        <h2 data-expression-text>Somos una comunidad<br />en movimiento</h2>
        <div class="community-copy">
          <p data-expression-text>
            El diseño de Bandcamp nace de la idea de definir la música
            independiente como una comunidad viva, formada por miles de artistas,
            sellos y fans que crean conexiones directas entre sí.
          </p>
          <p data-expression-text>
            Igual que las bandadas de estorninos dibujan formas cambiantes en el
            cielo. Aquí cada elemento gráfico representa una voz individual con
            las texturas y formas que lo componen.
          </p>
        </div>
      </div>
    </section>

    <section ref="musicSection" class="music-community section-white">
      <div class="music-copy">
        <h2 ref="musicTitle">La música crece<br />en comunidad</h2>
        <p ref="musicText">
          Queremos poner en valor al artista y reforzar el vínculo humano que
          existe alrededor de la música. Donde los creadores se sienten apoyados
          por una comunidad que escucha y participa activamente.
        </p>
      </div>
    </section>

    <section class="video-section values">
      <video class="media-bg" autoplay muted loop playsinline preload="metadata">
        <source src="/videos/video-atributos.mp4" type="video/mp4" />
      </video>
      <div class="media-overlay media-overlay--warm"></div>
      <div ref="valuesSection" class="values-inner" data-expression-group>
        <div class="values-list" aria-label="Valores de marca">
          <button
            v-for="(value, index) in values"
            :key="value.label"
            :ref="(el) => setValueWordRef(el, index)"
            class="value-word"
            :class="{ active: activeValueIndex === index }"
            type="button"
            data-expression-text
            @click="selectValue(index)"
          >
            {{ value.label }}
          </button>
        </div>
        <p ref="valuesCopy" class="values-copy" data-expression-text>
          {{ values[activeValueIndex].text }}
        </p>
      </div>
    </section>
  </section>
</template>