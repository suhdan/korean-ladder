import type { GameSettings } from "../../types";

export type Props = {
  settings: GameSettings;
  onChange: (settings: GameSettings) => void;
};
