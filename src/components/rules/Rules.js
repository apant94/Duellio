import './rules.css';

const Rules = () => {
  return (
    <section className='rules'>
      <h2 className='rules__title'>Правила переговорных поединков</h2>
      <div className='rules__container'>
        <h3 className='rules__stage'>Этап 1</h3>
        <h3 className='rules__stage'>Этап 2</h3>
        <h3 className='rules__stage'>Этап 3</h3>
        <div className='rules__item rules__item_type_roles'>
          <h4 className='rules__item-title'>Определение ролей</h4>
          <ul className='rules__item-textlist'>
            <li className='rules__item-text'>Игроки выбирают конфликтную ситуацию из списка кейсов.</li>
            <li className='rules__item-text'>Модератор с помощью жребия определяет, кто игрок 1, а кто игрок 2.</li>
            <li className='rules__item-text'>Выбирается нечётное количество судей из оставшихся игроков.</li>
            <li className='rules__item-text'>Каждый судья выбирает одну из позиций:
              <ul className='rules__item-textlist rules__item-textlist_type_nested'>
                <li className='rules__item-text'>Нанимающийся на работу к одному из игроков</li>
                <li className='rules__item-text'>Отправляющий на переговоры</li>
                <li className='rules__item-text'>Собственник, доверяющий управление компанией одному из игроков.</li>
              </ul>
            </li>
            <li className='rules__item-text'>Модератор зачитывает ситуацию. А для классического поединка еще и возможные роли для выбранной ситуации.</li>
          </ul>
        </div>
        <div className='rules__items'>
          <div className='rules__items-element'>
            <h4 className='rules__items-title'>Классические</h4>
            <div className='rules__items-wrapper'>
              <p className='rules__items-text'>2 раунда по</p>
              <div className='rules__items-clock'></div>
              <p className='rules__items-text'>4 min</p>
            </div>
            <ul className='rules__items-textlist'>
              <li classname='rules__items-text'>Игрок 1 выбирает роль сначала себе, потом оппоненту. Раунд заканчивается, если завершилось время или игроки договорились.</li>
              <li classname='rules__items-text'>Для второго раунда игрок 2 назначает роли себе и оппоненту.</li>
              <li classname='rules__items-text'>Если у кого-то из игроков осталось время, они могут сыграть дополнительный раунд.</li>
            </ul>
          </div>
          <div className='rules__items-element'>
            <h4 className='rules__items-title'>Экспресс</h4>
            <div className='rules__items-wrapper'>
              <p className='rules__items-text'>2 раунда по</p>
              <div className='rules__items-clock'></div>
              <p className='rules__items-text'>1 min</p>
            </div>
            <ul className='rules__items-textlist'>
              <li classname='rules__items-text'>Игрок 1 берет роль того, кто произносит выделенную в кейсе фразу. Отсчёт времени начинается после того, как игрок озвучил фразу. </li>
              <li classname='rules__items-text'>Раунд заканчивается, когда завершилось время, или игроки договорились.</li>
              <li classname='rules__items-text'>Теперь игрок 2 произносит выделенную фразу кейса, и начинается второй раунд.</li>
            </ul>
          </div>
        </div>
        <div className='rules__item rules__item_type_judging'>
          <h4 className='rules__item-title'>Судейство</h4>
          <ul className='rules__item-textlist'>
            <li className='rules__item-text'>Когда время закончилось, начинается судейство. Модератор призывает судей, которые готовы проголосовать поднять вверх кулак.</li>
            <li className='rules__item-text'>МПо команде модератора «Голосуем» судьи показывают 1 или 2 пальца в зависимости от того к кому из игроков по результатам раунда они нанялись бы на работу, кого отправили на переговоры, кому доверили бы собственность.</li>
            <li className='rules__item-text'>После этого модератор объявляет счёт, а судьи дают комментарии. Вместе с игроками обсуждается, как прошли переговоры.</li>
          </ul>
        </div>
        <div className='rules__important'>
          <h4 className='rules__important-title'>Важные правила</h4>
          <ul className='rules__important-list'>
            <li className='rules__important-text'>
              Стараемся договориться и сохранить отношения.
            </li>
            <li className='rules__important-text'>
              Не добавляем в кейс условия, кардинально меняющие вашу позицию. Например, если в кейсе сказано, что у вас семейная маленькая фирма по ремонту холодильников, нельзя внезапно заявить, что у вас огромная корпорация по продаже древних динозавров.
            </li>
            <li className='rules__important-text'>
              Не добавляем условия, которые противоречат тому, что уже успел добавить ваш оппонент. Например, ваш оппонент сказал «сейчас февраль», и вы уже не можете добавить, что сейчас июль и не сезон для продажи лыж.
            </li>
          </ul>
          <p className='rules__important-text rules__important-text_list_strip'>
            При нарушении любого из пунктов 2–3, модератор или ваш оппонент в праве сказать: «Протестую». В этом случае время останавливается, и ситуация откатывается к периоду до нарушения.
          </p>
          <div className='rules__important-vector'></div>
          <div className='rules__important-person'></div>
        </div>
      </div>
    </section>
  )

};

export default Rules;