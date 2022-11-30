import { useState } from "preact/hooks";

import type { GameSettings } from "./types";
import { Game, Header, Settings } from "./components/";
import { createNewPlayers } from "./util";

export function App() {
  const [settings, setSettings] = useState({
    mode: "",
    players: createNewPlayers(4),
  });

  const onSettingChange = (newSettings: GameSettings) => {};

  return (
    <div>
      <Header />
      <Game />
      <Settings settings={settings} onChange={onSettingChange} />
    </div>
  );
}
