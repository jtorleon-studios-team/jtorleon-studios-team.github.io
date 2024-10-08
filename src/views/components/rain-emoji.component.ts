import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-rain-emoji",
  standalone: true,
  template: `
  <div #refRainEmoji class="rain-emoji"></div>
  `,
})
export class RainEmojiComponent implements AfterViewInit, OnDestroy {
  private static EMOJIS = [
    [
      "🧨", "❓❗", "⛔", "🚫", "🚷"
    ],
    [
      "🎮", "🖥️", "😜", "🎲", "🎁", "🎉", "🎈", "💎", "⚡",
      "💩", "🫧", "🍎", "🍊", "🍋", "🍉", "🍇", "👾",
      "🍑", "🕹️", "✨", "🦊", "🐹", "🎯", "🚀", "🍒", "😁",
      "🛸", "🥭", "🌕", "🌖", "🐶", "🌗", "🌘", "🪐", "⭐️",
      "💣", "✨", "🌟", "🌠", "🍓", "🐰", "🌌", "👨‍🚀", "🛰️",
      "🍌", "🍈", "🍑", "🐱", "💎", "😍", "🎶", "🔮", "🍍",
      "👑", "⚜️", "😎", "🔶", "🔷", "🟣",
    ]
  ];

  @ViewChild('refRainEmoji')
  public refRainEmoji!: ElementRef<HTMLDivElement>;
  private animationFrameId: number | null = null;

  public constructor(private router: Router) {

  }

  public ngAfterViewInit() {
    this.startRainEffect();
  }

  public ngOnDestroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  private startRainEffect() {
    const _requestAnimation = (callback: FrameRequestCallback) => {
      return window.requestAnimationFrame(callback)
        || window.setTimeout(callback, 1000 / 60);
    };


    const _loop = () => {
      const v = document.createElement("div");
      v.classList.add("emoji-fall-effect");
      const i = this.router.url === "/error" ? 0 : 1;
      v.textContent = RainEmojiComponent.EMOJIS[i][Math.floor(Math.random() * RainEmojiComponent.EMOJIS[i].length)];
      v.style.setProperty("--emoji-size", `${Math.floor(Math.random() * (30 - 10 + 1)) + 10}px`);
      const p = Math.floor(Math.random() * 101);
      v.style.setProperty("--emoji-pos-l", `${p}%`);
      v.style.setProperty("--emoji-opacity", Math.max(0, 1 - (Math.abs(49.5 - p) / 49.5) * (0.9)).toString());
      const a = (Math.random() * 2 + 1) * 3000;
      v.style.animationDuration = `${a}ms`;
      this.refRainEmoji.nativeElement.appendChild(v);
      setTimeout(() => v.remove(), a + 100);

      this.animationFrameId = _requestAnimation(() => _loop());
    };
    _loop();
  }
}
