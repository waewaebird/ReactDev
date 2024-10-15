import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from "./FormTest/LoginForm";
import RespondingtoEvents from "./AddingInteractivity/RespondingtoEvents/RespondingtoEvents";
import StateAComponentsMemory from "./AddingInteractivity/StateAComponentsMemory/StateAComponentsMemory";
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
