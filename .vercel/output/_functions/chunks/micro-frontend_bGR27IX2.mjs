const microFrontend = new Proxy({"src":"/_astro/micro-frontend.DFQYHAkV.png","width":1960,"height":1595,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/frontend-architecture/micro-frontend.png";
							}
							
							return target[name];
						}
					});

export { microFrontend as m };
