/********************************************************************
 *  Copyright 2025 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  Adobe permits you to use, modify, and distribute this
 * file in accordance with the terms of the Adobe license agreement
 * accompanying it.
 *******************************************************************/
export type Theme = 'light' | 'dark' | 'auto';
export interface ThemeState {
    currentTheme: Theme;
    isDark: boolean;
}
export declare const getCurrentTheme: () => Theme;
export declare const isDarkTheme: () => boolean;
export declare const setTheme: (theme: Theme) => void;
export declare const toggleTheme: () => void;
export declare const initializeTheme: () => void;
export declare const getThemeState: () => ThemeState;
export declare const themeApi: () => {
    getCurrentTheme: () => Theme;
    isDarkTheme: () => boolean;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
    initializeTheme: () => void;
    getThemeState: () => ThemeState;
};
//# sourceMappingURL=themeApi.d.ts.map