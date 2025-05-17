import React from 'react';
import { FileText, Pencil, StickyNote, Book } from 'lucide-react';

const iconSize = 80; // ~2cm on most screens

const BackgroundIcons: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Top left, rotated */}
      <div className="absolute" style={{ top: 40, left: 80, transform: 'rotate(-18deg)' }}>
        <FileText className="text-gray-400 opacity-30" size={iconSize} />
      </div>
      {/* Top right, rotated */}
      <div className="absolute" style={{ top: 100, right: 120, transform: 'rotate(12deg)' }}>
        <StickyNote className="text-gray-400 opacity-30" size={iconSize} />
      </div>
      {/* Center left, rotated */}
      <div className="absolute" style={{ top: '40%', left: 60, transform: 'rotate(24deg)' }}>
        <Pencil className="text-gray-400 opacity-30" size={iconSize} />
      </div>
      {/* Center right, rotated */}
      <div className="absolute" style={{ top: '55%', right: 80, transform: 'rotate(-22deg)' }}>
        <FileText className="text-gray-400 opacity-30" size={iconSize} />
      </div>
      {/* Bottom left, rotated */}
      <div className="absolute" style={{ bottom: 60, left: 180, transform: 'rotate(15deg)' }}>
        <StickyNote className="text-gray-400 opacity-30" size={iconSize} />
      </div>
      {/* Bottom right, rotated */}
      <div className="absolute" style={{ bottom: 80, right: 100, transform: 'rotate(-30deg)' }}>
        <Pencil className="text-gray-400 opacity-30" size={iconSize} />
      </div>
      {/* Book icon, random position and angle */}
      <div className="absolute" style={{ top: '60%', left: '45%', transform: 'rotate(10deg)' }}>
        <Book className="text-gray-400 opacity-30" size={iconSize} />
      </div>
    </div>
  );
};

export default BackgroundIcons; 