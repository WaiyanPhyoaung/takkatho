const before = new Proxy({"src":"/_astro/before.D2VVl4Gp.png","width":471,"height":869,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/html/before.png";
							}
							
							return target[name];
						}
					});

export { before as b };
