export interface Media {
    id: string;
    name: string;
    cover: string;
    category: string;
    status: 'ready' | 'error' | 'transcribing';
    createdAt: string;
    updatedAt: string;
    languages: string[];
}

export interface FilterState {
    category: string;
    status: string;
    language: string;
}

export interface FilterContextProps {
    filter: FilterState;
    setFilter: (filter: Partial<FilterState>) => void;
    resetFilter: () => void;
}