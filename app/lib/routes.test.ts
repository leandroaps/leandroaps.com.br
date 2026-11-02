import { routeFromPath } from "./routes";

describe("routeFromPath", () => {
  it.each([
    ["/", "en", "home"],
    ["/profile", "en", "profile"],
    ["/pt-br", "pt-br", "home"],
    ["/pt-br/", "pt-br", "home"],
    ["/pt-br/perfil", "pt-br", "profile"],
    ["/pt-br/nao-existe", "pt-br", "home"],
    ["/nope", "en", "home"],
  ])("%s → %s / %s", (path, locale, page) => {
    expect(routeFromPath(path)).toEqual({ locale, page });
  });
});
