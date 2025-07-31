import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Gardens } from './pages/Gardens';
import { Necessaries } from './pages/Necessaries';
import { AboutUs } from './pages/AboutUs';
import { GardenDetail } from './pages/GardenDetail';
import type { Page, Service } from './types';

const App: React.FC = () => {
    const [activePage, setActivePage] = useState<Page>('home');
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSelectService = (service: Service) => {
        setSelectedService(service);
    };
    
    const handleBackToGardens = () => {
        setSelectedService(null);
        setActivePage('gardens');
    };

    const handlePageNavigation = (page: Page) => {
        // When a user clicks a main navigation link, always clear the selected service
        // and search query to ensure we exit any filtered or detail views.
        setSelectedService(null);
        setSearchQuery('');
        setActivePage(page);
    };

    const renderPage = () => {
        if (selectedService) {
            return <GardenDetail service={selectedService} onBack={handleBackToGardens} />;
        }
        
        switch (activePage) {
            case 'home':
                return <Home setActivePage={handlePageNavigation} />;
            case 'gardens':
                return <Gardens onSelectService={handleSelectService} searchQuery={searchQuery} />;
            case 'necessaries':
                return <Necessaries searchQuery={searchQuery} />;
            case 'about':
                return <AboutUs />;
            default:
                return <Home setActivePage={handlePageNavigation} />;
        }
    };

    return (
        <div className="flex flex-col min-h-screen font-sans">
            <Header 
                activePage={activePage} 
                setActivePage={handlePageNavigation}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery} 
            />
            <main className="flex-grow">
                {renderPage()}
            </main>
            <Footer />
        </div>
    );
};

export default App;