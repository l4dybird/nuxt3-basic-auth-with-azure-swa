declare module '@nuxt/schema' {
  interface RuntimeConfig {
    basicAuth: {
      pairs?: Record<string, string>
    }
  }
}