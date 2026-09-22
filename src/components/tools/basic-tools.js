import router from "@/router";

export function goRouterBack() {
	if (router) {
		router.back();
	}
}