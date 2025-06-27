import React, { useState } from 'react'
import './Dashboard.css'

const Dashboard = () => {
  // Simulated live data
  const [liveData] = useState({
    patients: 1234,
    appointments: 456,
    reports: 12 // Add a simulated count for reports
  })

  const dashboardTiles = [
    {
      id: 'patients',
      title: 'Patients',
      icon: '👥',
      count: liveData.patients,
      description: 'Total registered patients',
      gradient: 'linear-gradient(135deg,rgb(7, 23, 96) 0%, #764ba2 100%)'
    },
    {
      id: 'appointments',
      title: 'Appointments',
      icon: '📅',
      count: liveData.appointments,
      description: 'Upcoming appointments',
      gradient: 'linear-gradient(135deg,rgb(247, 151, 30) 0%, #ffd200 100%)'
    },
    {
      id: 'reports',
      title: 'Reports',
      icon: '📊',
      count: liveData.reports || 0, // Add a count for reports
      description: 'Generate and view reports',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    }
    
  ]

  const handleTileClick = (tileId) => {
    console.log(`Navigating to ${tileId} section`)
    alert(`Clicked on ${tileId}!`)
  }

  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <div className="tiles-section">
          <div className="tiles-grid">
            {dashboardTiles.map((tile) => (
              <div
                key={tile.id}
                className="dashboard-tile"
                onClick={() => handleTileClick(tile.id)}
                style={{ '--tile-gradient': tile.gradient }}
              >
                <div className="tile-icon">{tile.icon}</div>
                <div className="tile-content">
                  <h3 className="tile-title">{tile.title}</h3>
                  <div className="tile-count">{tile.count}</div>
                  <p className="tile-description">{tile.description}</p>
                </div>
                <div className="tile-overlay"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
