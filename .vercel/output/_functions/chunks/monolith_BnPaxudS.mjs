const monolith = new Proxy({"src":"/_astro/monolith.CrDuNqDo.png","width":800,"height":808,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/software-architecture/monolith.png";
							}
							
							return target[name];
						}
					});

export { monolith as m };
