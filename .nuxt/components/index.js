export { default as Arrow } from '../..\\components\\Arrow.vue'
export { default as ArrowLabel } from '../..\\components\\ArrowLabel.vue'
export { default as ArrowLeft } from '../..\\components\\ArrowLeft.vue'
export { default as ArrowRight } from '../..\\components\\ArrowRight.vue'
export { default as BookingRow } from '../..\\components\\BookingRow.vue'
export { default as BookLink } from '../..\\components\\BookLink.vue'
export { default as Close } from '../..\\components\\Close.vue'
export { default as CollectionItem } from '../..\\components\\CollectionItem.vue'
export { default as GmapsLink } from '../..\\components\\GmapsLink.vue'
export { default as ImageWrapper } from '../..\\components\\ImageWrapper.vue'
export { default as LanguageSwitcher } from '../..\\components\\LanguageSwitcher.vue'
export { default as LoadingIcon } from '../..\\components\\LoadingIcon.vue'
export { default as MenuIcon } from '../..\\components\\MenuIcon.vue'
export { default as NuxtLogo } from '../..\\components\\NuxtLogo.vue'
export { default as PictureWrapper } from '../..\\components\\PictureWrapper.vue'
export { default as PinGmaps } from '../..\\components\\PinGmaps.vue'
export { default as RomeLink } from '../..\\components\\RomeLink.vue'
export { default as Swipe } from '../..\\components\\Swipe.vue'
export { default as Tutorial } from '../..\\components\\Tutorial.vue'
export { default as IconEmail } from '../..\\components\\icon\\Email.vue'
export { default as IconFacebook } from '../..\\components\\icon\\Facebook.vue'
export { default as IconGmaps } from '../..\\components\\icon\\Gmaps.vue'
export { default as IconInstagram } from '../..\\components\\icon\\Instagram.vue'
export { default as IconPhone } from '../..\\components\\icon\\Phone.vue'
export { default as IconPin } from '../..\\components\\icon\\Pin.vue'
export { default as IconQuoteClose } from '../..\\components\\icon\\QuoteClose.vue'
export { default as IconQuoteOpen } from '../..\\components\\icon\\QuoteOpen.vue'
export { default as IconTripadvisor } from '../..\\components\\icon\\Tripadvisor.vue'
export { default as LayoutAccordion } from '../..\\components\\layout\\Accordion.vue'
export { default as LayoutBorderedTitle } from '../..\\components\\layout\\BorderedTitle.vue'
export { default as LayoutCategory } from '../..\\components\\layout\\Category.vue'
export { default as LayoutContactItem } from '../..\\components\\layout\\ContactItem.vue'
export { default as LayoutDefault } from '../..\\components\\layout\\Default.vue'
export { default as LayoutHero } from '../..\\components\\layout\\Hero.vue'
export { default as LayoutPressTeaser } from '../..\\components\\layout\\PressTeaser.vue'
export { default as LayoutRatings } from '../..\\components\\layout\\Ratings.vue'
export { default as LayoutReview } from '../..\\components\\layout\\Review.vue'
export { default as LayoutRoomCategory } from '../..\\components\\layout\\RoomCategory.vue'
export { default as LayoutRoomTeaser } from '../..\\components\\layout\\RoomTeaser.vue'
export { default as LayoutSimpleImage } from '../..\\components\\layout\\SimpleImage.vue'
export { default as LayoutTable } from '../..\\components\\layout\\Table.vue'
export { default as LayoutTeam } from '../..\\components\\layout\\Team.vue'
export { default as ModalBooking } from '../..\\components\\modal\\Booking.vue'
export { default as ModalInfo } from '../..\\components\\modal\\Info.vue'
export { default as ModalMainMenu } from '../..\\components\\modal\\MainMenu.vue'
export { default as ModalMedia } from '../..\\components\\modal\\Media.vue'
export { default as SectionLayoutAmenities } from '../..\\components\\section-layout\\Amenities.vue'
export { default as SectionLayoutArt } from '../..\\components\\section-layout\\Art.vue'
export { default as SectionLayoutCarousel } from '../..\\components\\section-layout\\Carousel.vue'
export { default as SectionLayoutContacts } from '../..\\components\\section-layout\\Contacts.vue'
export { default as SectionLayoutContainer } from '../..\\components\\section-layout\\Container.vue'
export { default as SectionLayoutDefault } from '../..\\components\\section-layout\\Default.vue'
export { default as SectionLayoutFeatures } from '../..\\components\\section-layout\\Features.vue'
export { default as SectionLayoutFlexGrid } from '../..\\components\\section-layout\\FlexGrid.vue'
export { default as SectionLayoutFurnitures } from '../..\\components\\section-layout\\Furnitures.vue'
export { default as SectionLayoutGallery1 } from '../..\\components\\section-layout\\Gallery1.vue'
export { default as SectionLayoutGalleryGrid } from '../..\\components\\section-layout\\GalleryGrid.vue'
export { default as SectionLayoutGrid0 } from '../..\\components\\section-layout\\Grid0.vue'
export { default as SectionLayoutGrid1 } from '../..\\components\\section-layout\\Grid1.vue'
export { default as SectionLayoutGrid2 } from '../..\\components\\section-layout\\Grid2.vue'
export { default as SectionLayoutGrid3 } from '../..\\components\\section-layout\\Grid3.vue'
export { default as SectionLayoutGrid4 } from '../..\\components\\section-layout\\Grid4.vue'
export { default as SectionLayoutGrid5 } from '../..\\components\\section-layout\\Grid5.vue'
export { default as SectionLayoutHomeGrid } from '../..\\components\\section-layout\\HomeGrid.vue'
export { default as SectionLayoutLaunch } from '../..\\components\\section-layout\\Launch.vue'
export { default as SectionLayoutMap } from '../..\\components\\section-layout\\Map.vue'
export { default as SectionLayoutPressGrid } from '../..\\components\\section-layout\\PressGrid.vue'
export { default as SectionLayoutRoomGrid } from '../..\\components\\section-layout\\RoomGrid.vue'
export { default as SectionLayoutRoomList } from '../..\\components\\section-layout\\RoomList.vue'
export { default as SiteCollection } from '../..\\components\\site\\Collection.vue'
export { default as SiteFooter } from '../..\\components\\site\\Footer.vue'
export { default as SiteHeader } from '../..\\components\\site\\Header.vue'
export { default as SiteSocials } from '../..\\components\\site\\Socials.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
