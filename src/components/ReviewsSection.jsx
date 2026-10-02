import React from 'react';
import { Star, MessageSquareQuote, CheckCircle, ExternalLink, ThumbsUp, Heart } from 'lucide-react';
import { GOOGLE_REVIEWS, RESTAURANT_INFO } from '../data/restaurantData';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-12 sm:py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-600" />
            Verified Customer Love
          </div>

          <h2 className="font-serif-southern text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Rated 4.8 Stars with 550+ Google Reviews
          </h2>

          <p className="mt-3 text-stone-600 text-base sm:text-lg">
            See why folks across Texarkana, Arkansas and the entire Ark-La-Tex region count on Mother Kelley's whenever they crave genuine home cooking.
          </p>
        </div>

        {/* Rating Overview Summary Banner */}
        <div className="bg-gradient-to-br from-amber-50 via-stone-50 to-amber-50/50 rounded-3xl p-6 sm:p-8 border border-amber-200/80 mb-10 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center text-center md:text-left">
            {/* Score */}
            <div className="md:border-r border-stone-200 md:pr-6 flex flex-col items-center md:items-start">
              <div className="flex items-center gap-2">
                <span className="font-serif-southern font-extrabold text-5xl text-stone-900">4.8</span>
                <span className="text-stone-400 font-bold text-xl">/ 5.0</span>
              </div>
              <div className="flex items-center gap-1 text-amber-500 my-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs text-stone-500 font-medium">Over 550+ Verified Google Reviews</span>
            </div>

            {/* Metric 1 */}
            <div className="space-y-1">
              <span className="text-xs uppercase font-bold tracking-wider text-amber-800">#1 Mentioned Dish</span>
              <p className="font-serif-southern font-bold text-lg text-stone-900">Chicken Fried Steak</p>
              <p className="text-xs text-stone-500">"Tender enough to cut with a fork"</p>
            </div>

            {/* Metric 2 */}
            <div className="space-y-1">
              <span className="text-xs uppercase font-bold tracking-wider text-amber-800">Craved Legend</span>
              <p className="font-serif-southern font-bold text-lg text-stone-900">Hot Water Cornbread</p>
              <p className="text-xs text-stone-500">Hand-shaped & fried to order</p>
            </div>

            {/* CTA to Google */}
            <div className="flex justify-center md:justify-end">
              <a
                href={`https://maps.google.com/?q=${RESTAURANT_INFO.mapAddressQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-stone-50 text-stone-800 font-bold text-xs sm:text-sm px-4 py-3 rounded-xl border border-stone-300 shadow-xs hover:border-amber-400 transition-colors"
              >
                <span>Read All Google Reviews</span>
                <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GOOGLE_REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="bg-stone-50/70 hover:bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header: Stars & Date */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-stone-400">{review.date}</span>
                </div>

                {/* Review Text */}
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed italic mb-4">
                  "{review.review}"
                </p>
              </div>

              <div className="pt-4 border-t border-stone-200/70 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-stone-900 leading-tight">
                    {review.name}
                  </h4>
                  <span className="text-[11px] text-stone-500">{review.tag}</span>
                </div>

                <span className="text-[11px] font-semibold text-amber-900 bg-amber-100/70 px-2.5 py-1 rounded-md border border-amber-200/60 max-w-[180px] truncate">
                  {review.dish}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
