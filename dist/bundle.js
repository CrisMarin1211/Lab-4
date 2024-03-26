(() => {
	'use strict';
	var e = {
			623: (e, t, n) => {
				n.d(t, { A: () => s });
				var r = n(601),
					o = n.n(r),
					i = n(314),
					a = n.n(i)()(o());
				a.push([e.id, "* {\n\tfont-family: 'Satoshi', sans-serif;\n}\n", '']);
				const s = a;
			},
			314: (e) => {
				e.exports = function (e) {
					var t = [];
					return (
						(t.toString = function () {
							return this.map(function (t) {
								var n = '',
									r = void 0 !== t[5];
								return (
									t[4] && (n += '@supports ('.concat(t[4], ') {')),
									t[2] && (n += '@media '.concat(t[2], ' {')),
									r && (n += '@layer'.concat(t[5].length > 0 ? ' '.concat(t[5]) : '', ' {')),
									(n += e(t)),
									r && (n += '}'),
									t[2] && (n += '}'),
									t[4] && (n += '}'),
									n
								);
							}).join('');
						}),
						(t.i = function (e, n, r, o, i) {
							'string' == typeof e && (e = [[null, e, void 0]]);
							var a = {};
							if (r)
								for (var s = 0; s < this.length; s++) {
									var c = this[s][0];
									null != c && (a[c] = !0);
								}
							for (var u = 0; u < e.length; u++) {
								var d = [].concat(e[u]);
								(r && a[d[0]]) ||
									(void 0 !== i &&
										(void 0 === d[5] ||
											(d[1] = '@layer'.concat(d[5].length > 0 ? ' '.concat(d[5]) : '', ' {').concat(d[1], '}')),
										(d[5] = i)),
									n && (d[2] ? ((d[1] = '@media '.concat(d[2], ' {').concat(d[1], '}')), (d[2] = n)) : (d[2] = n)),
									o &&
										(d[4]
											? ((d[1] = '@supports ('.concat(d[4], ') {').concat(d[1], '}')), (d[4] = o))
											: (d[4] = ''.concat(o))),
									t.push(d));
							}
						}),
						t
					);
				};
			},
			601: (e) => {
				e.exports = function (e) {
					return e[1];
				};
			},
			72: (e) => {
				var t = [];
				function n(e) {
					for (var n = -1, r = 0; r < t.length; r++)
						if (t[r].identifier === e) {
							n = r;
							break;
						}
					return n;
				}
				function r(e, r) {
					for (var i = {}, a = [], s = 0; s < e.length; s++) {
						var c = e[s],
							u = r.base ? c[0] + r.base : c[0],
							d = i[u] || 0,
							p = ''.concat(u, ' ').concat(d);
						i[u] = d + 1;
						var l = n(p),
							h = { css: c[1], media: c[2], sourceMap: c[3], supports: c[4], layer: c[5] };
						if (-1 !== l) t[l].references++, t[l].updater(h);
						else {
							var f = o(h, r);
							(r.byIndex = s), t.splice(s, 0, { identifier: p, updater: f, references: 1 });
						}
						a.push(p);
					}
					return a;
				}
				function o(e, t) {
					var n = t.domAPI(t);
					return (
						n.update(e),
						function (t) {
							if (t) {
								if (
									t.css === e.css &&
									t.media === e.media &&
									t.sourceMap === e.sourceMap &&
									t.supports === e.supports &&
									t.layer === e.layer
								)
									return;
								n.update((e = t));
							} else n.remove();
						}
					);
				}
				e.exports = function (e, o) {
					var i = r((e = e || []), (o = o || {}));
					return function (e) {
						e = e || [];
						for (var a = 0; a < i.length; a++) {
							var s = n(i[a]);
							t[s].references--;
						}
						for (var c = r(e, o), u = 0; u < i.length; u++) {
							var d = n(i[u]);
							0 === t[d].references && (t[d].updater(), t.splice(d, 1));
						}
						i = c;
					};
				};
			},
			659: (e) => {
				var t = {};
				e.exports = function (e, n) {
					var r = (function (e) {
						if (void 0 === t[e]) {
							var n = document.querySelector(e);
							if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
								try {
									n = n.contentDocument.head;
								} catch (e) {
									n = null;
								}
							t[e] = n;
						}
						return t[e];
					})(e);
					if (!r)
						throw new Error(
							"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
						);
					r.appendChild(n);
				};
			},
			540: (e) => {
				e.exports = function (e) {
					var t = document.createElement('style');
					return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
				};
			},
			56: (e, t, n) => {
				e.exports = function (e) {
					var t = n.nc;
					t && e.setAttribute('nonce', t);
				};
			},
			825: (e) => {
				e.exports = function (e) {
					if ('undefined' == typeof document) return { update: function () {}, remove: function () {} };
					var t = e.insertStyleElement(e);
					return {
						update: function (n) {
							!(function (e, t, n) {
								var r = '';
								n.supports && (r += '@supports ('.concat(n.supports, ') {')),
									n.media && (r += '@media '.concat(n.media, ' {'));
								var o = void 0 !== n.layer;
								o && (r += '@layer'.concat(n.layer.length > 0 ? ' '.concat(n.layer) : '', ' {')),
									(r += n.css),
									o && (r += '}'),
									n.media && (r += '}'),
									n.supports && (r += '}');
								var i = n.sourceMap;
								i &&
									'undefined' != typeof btoa &&
									(r += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
										btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
										' */'
									)),
									t.styleTagTransform(r, e, t.options);
							})(t, e, n);
						},
						remove: function () {
							!(function (e) {
								if (null === e.parentNode) return !1;
								e.parentNode.removeChild(e);
							})(t);
						},
					};
				};
			},
			113: (e) => {
				e.exports = function (e, t) {
					if (t.styleSheet) t.styleSheet.cssText = e;
					else {
						for (; t.firstChild; ) t.removeChild(t.firstChild);
						t.appendChild(document.createTextNode(e));
					}
				};
			},
		},
		t = {};
	function n(r) {
		var o = t[r];
		if (void 0 !== o) return o.exports;
		var i = (t[r] = { id: r, exports: {} });
		return e[r](i, i.exports, n), i.exports;
	}
	(n.n = (e) => {
		var t = e && e.__esModule ? () => e.default : () => e;
		return n.d(t, { a: t }), t;
	}),
		(n.d = (e, t) => {
			for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
		}),
		(n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
		(n.nc = void 0),
		(() => {
			const e = (e) => {
				return (
					(t = void 0),
					(n = void 0),
					(o = function* () {
						try {
							return yield fetch('https://rickandmortyapi.com/api/character/' + e).then((e) => e.json());
						} catch (e) {
							console.error(e);
						}
					}),
					new ((r = void 0) || (r = Promise))(function (e, i) {
						function a(e) {
							try {
								c(o.next(e));
							} catch (e) {
								i(e);
							}
						}
						function s(e) {
							try {
								c(o.throw(e));
							} catch (e) {
								i(e);
							}
						}
						function c(t) {
							var n;
							t.done
								? e(t.value)
								: ((n = t.value),
								  n instanceof r
										? n
										: new r(function (e) {
												e(n);
										  })).then(a, s);
						}
						c((o = o.apply(t, n || [])).next());
					})
				);
				var t, n, r, o;
			};
			var t = n(72),
				r = n.n(t),
				o = n(825),
				i = n.n(o),
				a = n(659),
				s = n.n(a),
				c = n(56),
				u = n.n(c),
				d = n(540),
				p = n.n(d),
				l = n(113),
				h = n.n(l),
				f = n(623),
				m = {};
			(m.styleTagTransform = h()),
				(m.setAttributes = u()),
				(m.insert = s().bind(null, 'head')),
				(m.domAPI = i()),
				(m.insertStyleElement = p()),
				r()(f.A, m);
			const v = f.A && f.A.locals ? f.A.locals : void 0;
			var b;
			!(function (e) {
				(e.name = 'name'),
					(e.uid = 'uid'),
					(e.image = 'image'),
					(e.status = 'status'),
					(e.species = 'species'),
					(e.type = 'type'),
					(e.origin = 'origin'),
					(e.nameoffirstepisode = 'nameoffirstepisode');
			})(b || (b = {}));
			class y extends HTMLElement {
				constructor() {
					super(), this.attachShadow({ mode: 'open' });
				}
				static get observedAttributes() {
					return Object.keys({
						name: null,
						uid: null,
						image: null,
						status: null,
						species: null,
						type: null,
						origin: null,
						nameoffirstepisode: null,
					});
				}
				attributeChangedCallback(e, t, n = '') {
					e === b.uid ? (this.uid = n ? Number(n) : void 0) : (this[e] = n), this.render();
				}
				connectedCallback() {
					this.render();
				}
				render() {
					this.shadowRoot &&
						(this.shadowRoot.innerHTML = `\n\n   <section>\n   <h1><b> Name: </b>${this.name}</h1>\n   <p><b> Id: </b>${this.uid}</p>\n   <img src="${this.image}" ><img>\n\t <p><b> Status: </b>${this.status}</p>\n   <p><b> Species: </b>${this.species}</p>\n   <p><b> Type: </b>${this.type}</p>\n   <p><b> Origin: </b>${this.origin}</p>\n\t <p><b> First Episode: </b>${this.nameoffirstepisode}</p>\n   </section>\n   `);
				}
			}
			customElements.define('my-character', y);
			class g extends HTMLElement {
				constructor() {
					super(),
						(this.characters = []),
						(this.characterCountInput = null),
						(this.charactersContainer = null),
						this.attachShadow({ mode: 'open' });
				}
				connectedCallback() {
					this.render();
				}
				render() {
					if (this.shadowRoot) {
						this.shadowRoot.innerHTML = '';
						const t = this.ownerDocument.createElement('style');
						(t.innerHTML = v), this.shadowRoot.appendChild(t);
						const n = document.createElement('form');
						(n.id = 'form'),
							n.addEventListener('submit', (t) => {
								return (
									(n = this),
									(o = void 0),
									(a = function* () {
										console.log('En addEvent listener'), t.preventDefault();
										const n = yield e(Number(r.value));
										console.log(this.characters), this.renderCharacter(n);
									}),
									new ((i = void 0) || (i = Promise))(function (e, t) {
										function r(e) {
											try {
												c(a.next(e));
											} catch (e) {
												t(e);
											}
										}
										function s(e) {
											try {
												c(a.throw(e));
											} catch (e) {
												t(e);
											}
										}
										function c(t) {
											var n;
											t.done
												? e(t.value)
												: ((n = t.value),
												  n instanceof i
														? n
														: new i(function (e) {
																e(n);
														  })).then(r, s);
										}
										c((a = a.apply(n, o || [])).next());
									})
								);
								var n, o, i, a;
							});
						const r = document.createElement('input');
						(r.type = 'number'),
							(r.placeholder = 'Intriduce a number here'),
							(r.value = ''),
							(r.className = 'number-input');
						const o = document.createElement('input');
						(o.type = 'submit'),
							(o.value = 'Get'),
							(o.className = 'submit-input'),
							n.appendChild(r),
							n.appendChild(o),
							this.shadowRoot.appendChild(n);
					}
				}
				renderCharacter(e) {
					(this.characters = e.map((e) => {
						const t = this.ownerDocument.createElement('my-character');
						return (
							t.setAttribute(b.image, e.image),
							t.setAttribute(b.uid, String(e.id)),
							t.setAttribute(b.name, e.name),
							t.setAttribute(b.status, e.status),
							t.setAttribute(b.species, e.species),
							t.setAttribute(b.type, e.type),
							t.setAttribute(b.origin, e.origin),
							t.setAttribute(b.nameoffirstepisode, e.nameoffirstepisode),
							t
						);
					})),
						this.shadowRoot &&
							this.characters.forEach((e) => {
								var t;
								null === (t = this.shadowRoot) || void 0 === t || t.appendChild(e);
							});
				}
			}
			customElements.define('app-container', g);
		})();
})();
