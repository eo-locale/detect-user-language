import { detectUserLanguage } from '..';

const navigatorLanguageProperties = [
  'language',
  'languages',
  'userLanguage',
  'browserLanguage',
  'systemLanguage',
];

const mockNavigator = (navigator: any) => {
  navigatorLanguageProperties.forEach(property =>
    Object.defineProperty(window.navigator, property, {
      value: navigator[property],
      configurable: true,
    }),
  );
};

describe('detectUserLanguage', () => {
  it('Should return detected language', () => {
    const navigator = {
      language: 'pl',
      languages: ['pl', 'en-US', 'en', 'pl-PL'],
    };

    mockNavigator(navigator);

    expect(detectUserLanguage(['en', 'pl'])).toBe('pl');
  });
});
