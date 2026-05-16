import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, Download, Share2, FileCheck } from 'lucide-react';

export const VideoPlayer: React.FC<{ videoId?: string }> = ({ videoId = '1' }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(45);
  const [duration, setDuration] = useState('5:45');
  const [currentTime, setCurrentTime] = useState('2:34');

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Video Container */}
        <div className="bg-black rounded-xl overflow-hidden shadow-2xl mb-8">
          <div className="relative bg-gray-900 aspect-video flex items-center justify-center">
            {/* Placeholder Video */}
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center relative">
              <img
                src="https://via.placeholder.com/1280x720?text=Generated+Video+Preview"
                alt="Video Preview"
                className="w-full h-full object-cover"
              />
              {!isPlaying && (
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/60 transition group"
                >
                  <Play className="w-20 h-20 text-white group-hover:scale-110 transition" />
                </button>
              )}
            </div>
          </div>

          {/* Video Controls */}
          <div className="bg-gray-800 p-6 space-y-4">
            {/* Progress Bar */}
            <div className="space-y-2">
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={(e) => setProgress(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-sm text-gray-400">
                <span>{currentTime}</span>
                <span>{duration}</span>
              </div>
            </div>

            {/* Control Buttons */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 hover:bg-gray-700 rounded-lg transition"
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 text-white" />
                ) : (
                  <Play className="w-6 h-6 text-white" />
                )}
              </button>
              <button className="p-2 hover:bg-gray-700 rounded-lg transition">
                <Volume2 className="w-6 h-6 text-white" />
              </button>
              <div className="flex-1" />
              <button className="p-2 hover:bg-gray-700 rounded-lg transition">
                <Share2 className="w-6 h-6 text-white" />
              </button>
              <button className="p-2 hover:bg-gray-700 rounded-lg transition">
                <Download className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Video Details */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Details */}
          <div className="md:col-span-2 bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Sample Video Project</h1>
            <p className="text-gray-600 text-lg mb-6">
              This is a professionally generated video created from your script using AI-powered
              voice generation, automated media selection, and dynamic composition.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="text-gray-600 font-semibold">Duration:</span>
                <span className="text-gray-900">5 minutes 45 seconds</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-600 font-semibold">Quality:</span>
                <span className="text-gray-900">1080p HD</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-600 font-semibold">Format:</span>
                <span className="text-gray-900">MP4 (H.264)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-600 font-semibold">Generated:</span>
                <span className="text-gray-900">2026-05-16</span>
              </div>
            </div>

            {/* Compliance Report */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FileCheck className="w-6 h-6 text-green-600" />
                Compliance Report
              </h3>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <p className="text-green-800 font-semibold">✅ All media licensed and compliant</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-700"><strong>Media Sources:</strong></p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Pixabay (CC0 License)</li>
                  <li>Unsplash (CC0 License)</li>
                  <li>Google TTS (Commercial Use)</li>
                  <li>Royalty-free Music</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Download Section */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Download</h3>
              <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition mb-2 flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Download MP4
              </button>
              <p className="text-sm text-gray-600">File size: 245 MB</p>
            </div>

            {/* Share Section */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Share</h3>
              <div className="space-y-2">
                <button className="w-full bg-gray-100 text-gray-900 font-semibold py-2 rounded-lg hover:bg-gray-200 transition">
                  Share Link
                </button>
                <button className="w-full bg-gray-100 text-gray-900 font-semibold py-2 rounded-lg hover:bg-gray-200 transition">
                  Copy Embed Code
                </button>
              </div>
            </div>

            {/* Video Stats */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Statistics</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Scenes</p>
                  <p className="text-2xl font-bold text-gray-900">12</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Media Assets</p>
                  <p className="text-2xl font-bold text-gray-900">24</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Transitions</p>
                  <p className="text-2xl font-bold text-gray-900">11</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
