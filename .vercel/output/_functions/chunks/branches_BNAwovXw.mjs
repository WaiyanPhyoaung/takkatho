const branches = new Proxy({"src":"/_astro/branches.ia0Wgyeb.png","width":886,"height":315,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/git-course/branches.png";
							}
							
							return target[name];
						}
					});

export { branches as b };
