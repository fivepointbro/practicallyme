// Are we logged in?
if (localStorage.getItem('username')!='anon') FirstRunPage = 'WelcomePage';
else FirstRunPage = 'TutorialPage';

// The page the user lands on after opening the app and without a session
export var FirstRunPage;

// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
export const MainPage = 'TabsPage';

// The initial root pages for our tabs (remove if not using tabs)
export const Tab1Root = 'ListMasterPage';
export const Tab2Root = 'UserPage';
export const Tab3Root = 'SettingsPage';
export const Tab4Root = 'PromoPage';