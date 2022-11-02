import styles from './App.module.css';
import image from './images/konstantin.jpeg';
import imageWebp from './images/konstantin.webp';
import tg from './images/telegram.svg';
import vk from './images/vk.svg';

export const App = () => {
	return (
		<section className={styles.app}>
			<div className={styles.container}>
				<div className={styles.imageWrapper}>
					<picture>
						<source srcset={imageWebp} type='image/webp' />
						<img className={styles.image} src={image} alt='Константин Антипин' />
					</picture>
				</div>
				<div className={styles.descriptionWrapper}>
					<h1 className={styles.title}>Константин Антипин</h1>
					<p className={styles.description}>Издатель. Делаю детство добрым</p>
					<ul className={styles.socialWrapper}>
						<li className={styles.socialItem}>
							<a href='https://vk.com/konstantinantipin' target='_blank' rel='noreferrer'>
								<img className={styles.icon} src={vk} alt='ВКтонтакте' />
							</a>
						</li>
						<li className={styles.socialItem}>
							<a href='https://t.me/antipin_konstantin' target='_blank' rel='noreferrer'>
								<img className={styles.icon} src={tg} alt='Телеграмм' />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};
