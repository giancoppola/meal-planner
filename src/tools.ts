import { ThemeOptions } from "@mui/material";

export const getRandomIntInclusive = (min: number, max: number): number => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

export const getRandomIntArray = (min: number, max: number) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

export const appendPx = (word: string): string => {
  return word + 'px';
}

export const appendDeg = (word: string): string => {
  return word + "deg";
}

export const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
        main: '#3943b7',
        contrastText: '#ffffff',
    },
    secondary: {
        main: '#b8b9ff',
        contrastText: '#1c2321',
    },
    background: {
        default: '#ffffff',
        paper: '#ffffff',
    },
    text: {
      primary: '#1c2321',
      secondary: "rgba(28, 35, 33, 0.6)",
      disabled: "rgba(28, 35, 33, 0.38)",
    },
  },
};
export const darkThemeOptions: ThemeOptions = {
  palette: {
      mode: 'dark',
      primary: {
          main: '#b8b9ff',
          contrastText: '#1c2321',
      },
      secondary: {
          main: '#3943b7',
          contrastText: '#ffffff',
      },
      background: {
          default: '#1c2321',
          paper: '#1c2321',
      },
      text: {
        primary: '#1c2321',
        secondary: "rgba(28, 35, 33, 0.6)",
        disabled: "rgba(28, 35, 33, 0.38)",
      }
  },
};

export const palette = {
  purple: '#b8b9ff',
  lightBlue: '#d1faff',
  black: '#1c2321',
  white: '#ffffff',
  darkBlue: '#3943b7',
  green: '#d7f171',
}

// Emoji background animation
const emojiArr: Array<string> = ['🍕', '🍔', '🍟', '🌯', '🌮'];
export const emojiAnimation = () => {
  setInterval(() => {
      const min: number = -20;
      const max: number = 20;
      let start: number = -20;
      let newEmoji = document.createElement('p');
      newEmoji.innerHTML = emojiArr[getRandomIntArray(0, emojiArr.length)];
      newEmoji.classList.add("floating-emoji");
      newEmoji.style.left = appendPx(getRandomIntArray(min, window.innerWidth+max).toString());
      newEmoji.style.top = appendPx(min.toString());
      newEmoji.style.rotate = appendDeg('0');
      // Check if page is currently active, else don't actually add the node and animate it
      if (!document.hidden) {
          document.body.appendChild(newEmoji);
          let animation = setInterval(() => {
              let height = parseInt(newEmoji.style.top);
              let rotation = parseInt(newEmoji.style.rotate);
              if (height < window.innerHeight) {
                  newEmoji.style.top = appendPx((height + 1).toString());
                  newEmoji.style.rotate = appendDeg((rotation + 1).toString());
              }
              else {
                  newEmoji.remove();
                  clearInterval(animation);
              }
          }, 10)
      }
  }, 3000)
}