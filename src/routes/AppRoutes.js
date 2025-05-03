import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Introduction from '../pages/Introduction/Introduction';
import SceneSelection from '../pages/SceneSelection/SceneSelection';
import SceneDetail from '../pages/SceneDetail/SceneDetail';
import CharacterDialogue from '../pages/CharacterDialogue/CharacterDialogue';
import ExplorationReport from '../pages/ExplorationReport/ExplorationReport';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/introduction" element={<Introduction />} />
      <Route path="/scene-selection" element={<SceneSelection />} />
      <Route path="/scene/:sceneId" element={<SceneDetail />} />
      <Route path="/scene/:sceneId/character/:characterId" element={<CharacterDialogue />} />
      <Route path="/scene/:sceneId/report" element={<ExplorationReport />} />
    </Routes>
  );
}

export default AppRoutes;