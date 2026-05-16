import React, { useState } from 'react';
import { Search, Filter, Play, Trash2, Edit2, Share2, Download, ChevronRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const [projects] = useState([
    {
      id: 1,
      title: 'Product Launch Video',
      status: 'completed',
      progress: 100,
      createdAt: '2026-05-15',
      duration: '2:45',
      thumbnail: 'https://via.placeholder.com/200x120?text=Video+1',
    },
    {
      id: 2,
      title: 'Company Overview',
      status: 'processing',
      progress: 65,
      createdAt: '2026-05-14',
      duration: '--:--',
      thumbnail: 'https://via.placeholder.com/200x120?text=Video+2',
    },
    {
      id: 3,
      title: 'Tutorial Series',
      status: 'completed',
      progress: 100,
      createdAt: '2026-05-10',
      duration: '5:30',
      thumbnail: 'https://via.placeholder.com/200x120?text=Video+3',
    },
    {
      id: 4,
      title: 'Social Media Ads',
      status: 'draft',
      progress: 0,
      createdAt: '2026-05-08',
      duration: '--:--',
      thumbnail: 'https://via.placeholder.com/200x120?text=Video+4',
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'draft':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Your Projects</h1>
          <p className="text-xl text-gray-600">Manage and organize all your video projects</p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition font-semibold">
            <Filter className="w-5 h-5" />
            Filter
          </button>
        </div>

        {/* Grid View */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              {/* Thumbnail */}
              <div className="relative group overflow-hidden h-40 bg-gray-200">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition"
                />
                {project.status === 'completed' && (
                  <button className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
                    <Play className="w-12 h-12 text-white" />
                  </button>
                )}
                {project.status === 'processing' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <div className="text-center">
                      <div className="w-12 h-12 border-4 border-white border-t-blue-500 rounded-full animate-spin mx-auto mb-2" />
                      <p className="text-white text-sm font-semibold">{project.progress}%</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 truncate">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{project.createdAt}</p>

                {/* Status Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                  {project.duration !== '--:--' && (
                    <span className="text-xs text-gray-600">{project.duration}</span>
                  )}
                </div>

                {/* Progress Bar */}
                {project.status === 'processing' && (
                  <div className="mb-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-2">
                  {project.status === 'completed' && (
                    <>
                      <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold text-sm">
                        <Play className="w-4 h-4" />
                        Watch
                      </button>
                      <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                        <Download className="w-4 h-4 text-gray-600" />
                      </button>
                    </>
                  )}
                  {project.status === 'draft' && (
                    <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold text-sm">
                      <Edit2 className="w-4 h-4" />
                      Continue
                    </button>
                  )}
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                    <Share2 className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-2 border border-red-300 rounded-lg hover:bg-red-50 transition">
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {projects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600 mb-4">No projects yet</p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
              Create Your First Video
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
