import React from 'react';

import { SearchProvider } from './search';

const AppProvider: React.FC = ({ children }) => {
    return <SearchProvider>{children}</SearchProvider>;
};

export default AppProvider;
