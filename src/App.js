import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from "./FormTest/LoginForm";
import RespondingtoEvents from "./AddingInteractivity/RespondingtoEvents/RespondingtoEvents";
import StateAComponentsMemory from "./AddingInteractivity/StateAComponentsMemory/StateAComponentsMemory";
import RenderandCommit from "./AddingInteractivity/RenderandCommit/RenderandCommit";
import StateasaSnapshot from "./AddingInteractivity/StateasaSnapshot/StateasaSnapshot";
import QueueingaSeriesofStateUpdates from "./AddingInteractivity/QueueingaSeriesofStateUpdates/QueueingaSeriesofStateUpdates";
import UpdatingObjectsinState from "./AddingInteractivity/UpdatingObjectsinState/UpdatingObjectsinState";
import UpdatingArraysinState from "./AddingInteractivity/UpdatingArraysinState/UpdatingArraysinState";
import ReactingtoInputwithState from './ManagingState/ReactingtoInputwithState/ReactingtoInputwithState';
import ChoosingtheStateStructure from './ManagingState/ChoosingtheStateStructure/ChoosingtheStateStructure';
import ScalingUpwithReducerandContext from "./ManagingState/ScalingUpwithReducerandContext/ScalingUpwithReducerandContext";
import PassingDataDeeplywithContext from "./ManagingState/PassingDataDeeplywithContext/PassingDataDeeplywithContext";
import ExtractingStateLogicintoaReducer from "./ManagingState/ExtractingStateLogicintoaReducer/ExtractingStateLogicintoaReducer";
import ManipulatingtheDOMwithRefs from "./EscapeHatches/ManipulatingtheDOMwithRefs/ManipulatingtheDOMwithRefs";
import ReferencingValueswithRefs from "./EscapeHatches/ReferencingValueswithRefs/ReferencingValueswithRefs";
import SynchronizingwithEffects from "./EscapeHatches/SynchronizingwithEffects/SynchronizingwithEffects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/RespondingtoEvents" element={<RespondingtoEvents />} />
        <Route path="/StateAComponentsMemory" element={<StateAComponentsMemory />} />
        <Route path="/RenderandCommit" element={<RenderandCommit />} />
        <Route path="/StateasaSnapshot" element={<StateasaSnapshot />} />
        <Route path="/QueueingaSeriesofStateUpdates" element={<QueueingaSeriesofStateUpdates />} />
        <Route path="/UpdatingObjectsinState" element={<UpdatingObjectsinState />} />
        <Route path="/UpdatingArraysinState" element={<UpdatingArraysinState />} />
        <Route path="/ReactingtoInputwithState" element={<ReactingtoInputwithState />} />
        <Route path="/ChoosingtheStateStructure" element={<ChoosingtheStateStructure />} />
        <Route path="/ScalingUpwithReducerandContext" element={<ScalingUpwithReducerandContext />} />
        <Route path="/PassingDataDeeplywithContext" element={<PassingDataDeeplywithContext />} />
        <Route path="/ExtractingStateLogicintoaReducer" element={<ExtractingStateLogicintoaReducer />} />
        <Route path="/ManipulatingtheDOMwithRefs" element={<ManipulatingtheDOMwithRefs />} />
        <Route path="/ReferencingValueswithRefs" element={<ReferencingValueswithRefs />} />
        <Route path="/SynchronizingwithEffects" element={<SynchronizingwithEffects />} />
      </Routes>
    </Router>
  );
}

export default App;
