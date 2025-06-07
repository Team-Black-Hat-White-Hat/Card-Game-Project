export const battleUI = `<div class="combat-scene">
    <!-- Background -->
    <div class="background-elements">
      <div class="sunset"></div>
      <div class="sand"></div>
      <div class="sun"></div>
    </div>

    <!-- Player & Enemies -->
    <div class="battle-area">
        <div class="player">
            <div class="character-container">
            </div>
          </div>
        <div class="enemies">
            <div class="character-container">
            </div>
        </div>
    </div>

    <!-- Hand Area -->
    <div class="hand-area">

    </div>

    <!-- UI Buttons -->
    <button class="draw-button">Draw</button>
    <button class="discard-button">Discard</button>
    <button class="end-turn-button">End Turn</button>
  </div>
  <div id="discard-modal" style="display:none; position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.7); z-index:1000; align-items:center; justify-content:center;">
  <div id="discard-modal-content" style="background:white; padding:20px; border-radius:10px; max-width:90vw; max-height:80vh; overflow:auto;">
    <button id="close-discard-modal" style="float:right;">Close</button>
    <h2>Discard Pile</h2>
    <div id="discard-cards" style="display:flex; flex-wrap:wrap; gap:10px;"></div>
  </div>
</div>`