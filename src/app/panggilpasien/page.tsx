// pages/SettingsPage.tsx
import React from 'react';
import MainLayout from './mainlayout';

const SettingsPage: React.FC = () => (
  <MainLayout>
    {/* Konten spesifik untuk Page FOOTER */}
    <div className="imageSection">
      <img src="/assets/set.png" alt="Settings Icon" className="centerImage" />
    </div>
  </MainLayout>
);

export default SettingsPage;