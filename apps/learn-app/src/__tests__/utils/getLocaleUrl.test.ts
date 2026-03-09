import { describe, it, expect } from 'vitest';
import { getLocaleUrl } from '../../utils/getLocaleUrl';

describe('getLocaleUrl', () => {
    const mockLocaleConfigs = {
        en: { label: 'English' },
        ur: { path: 'ur', label: 'Urdu' },
        fr: { path: 'fr', label: 'French' },
    };

    it('should switch from default (en) to non-default (ur) on root domain', () => {
        const result = getLocaleUrl({
            pathname: '/docs/factory',
            currentLocale: 'en',
            targetLocale: 'ur',
            defaultLocale: 'en',
            localeConfigs: mockLocaleConfigs,
            baseUrl: '/',
        });
        expect(result).toBe('/ur/docs/factory');
    });

    it('should switch from non-default (ur) to default (en) on root domain', () => {
        const result = getLocaleUrl({
            pathname: '/ur/docs/factory',
            currentLocale: 'ur',
            targetLocale: 'en',
            defaultLocale: 'en',
            localeConfigs: mockLocaleConfigs,
            baseUrl: '/ur/', // Docusaurus injects locale into baseUrl
        });
        expect(result).toBe('/docs/factory');
    });

    it('should switch from non-default (ur) to another non-default (fr) on root domain', () => {
        const result = getLocaleUrl({
            pathname: '/ur/docs/factory',
            currentLocale: 'ur',
            targetLocale: 'fr',
            defaultLocale: 'en',
            localeConfigs: mockLocaleConfigs,
            baseUrl: '/ur/',
        });
        expect(result).toBe('/fr/docs/factory');
    });

    it('should switch from default (en) to non-default (ur) on a subpath domain', () => {
        const result = getLocaleUrl({
            pathname: '/agent-factory-book/docs/factory',
            currentLocale: 'en',
            targetLocale: 'ur',
            defaultLocale: 'en',
            localeConfigs: mockLocaleConfigs,
            baseUrl: '/agent-factory-book/',
        });
        expect(result).toBe('/agent-factory-book/ur/docs/factory');
    });

    it('should switch from non-default (ur) to default (en) on a subpath domain', () => {
        const result = getLocaleUrl({
            pathname: '/agent-factory-book/ur/docs/factory',
            currentLocale: 'ur',
            targetLocale: 'en',
            defaultLocale: 'en',
            localeConfigs: mockLocaleConfigs,
            baseUrl: '/agent-factory-book/ur/', // Docusaurus injects locale into baseUrl
        });
        expect(result).toBe('/agent-factory-book/docs/factory');
    });

    it('should handle root path translation from en to ur', () => {
        const result = getLocaleUrl({
            pathname: '/',
            currentLocale: 'en',
            targetLocale: 'ur',
            defaultLocale: 'en',
            localeConfigs: mockLocaleConfigs,
            baseUrl: '/',
        });
        expect(result).toBe('/ur/');
    });

    it('should handle root path translation from ur to en', () => {
        const result = getLocaleUrl({
            pathname: '/ur/',
            currentLocale: 'ur',
            targetLocale: 'en',
            defaultLocale: 'en',
            localeConfigs: mockLocaleConfigs,
            baseUrl: '/ur/',
        });
        expect(result).toBe('/');
    });

    it('should handle subpath root translation from ur to en', () => {
        const result = getLocaleUrl({
            pathname: '/agent-factory-book/ur/',
            currentLocale: 'ur',
            targetLocale: 'en',
            defaultLocale: 'en',
            localeConfigs: mockLocaleConfigs,
            baseUrl: '/agent-factory-book/ur/',
        });
        expect(result).toBe('/agent-factory-book/');
    });
});
