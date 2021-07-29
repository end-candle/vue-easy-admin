import NProgress from 'nprogress';
import '@/styles/nprogress.scss';

NProgress.configure({
    showSpinner: false
});

/**
 * 显示加载进度条
 */
export function showProgress() {
    NProgress.start();
}

/**
 * 关闭加载进度条
 */
export function closeProgress() {
    NProgress.done();
}
